import { mount, config } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ProductCard from '../../components/ProductCard.vue'

// Мок для компонентов Vuetify
const createVuetifyMocks = () => {
  // Мок для v-img
  const mockVImg = {
    name: 'v-img',
    template: '<div class="v-img-mock"><slot></slot></div>',
    props: {
      src: String,
      cover: Boolean,
      width: [String, Number],
      height: [String, Number]
    }
  }

  // Мок для v-btn
  const mockVBtn = {
    name: 'v-btn',
    template: '<button class="v-btn-mock"><slot></slot></button>',
    props: {
      color: String,
      flat: Boolean,
      class: String
    }
  }

  return { mockVImg, mockVBtn }
}

describe('ProductCard', () => {
  beforeEach(() => {
    const { mockVImg, mockVBtn } = createVuetifyMocks()
    
    // Глобальные моки компонентов
    config.global = {
      ...config.global,
      stubs: {
        'v-img': mockVImg,
        'v-btn': mockVBtn
      }
    }
  })
  
  it('отображает информацию о продукте корректно', () => {
    const wrapper = mount(ProductCard, {
      props: {
        views: 150,
        days: 3,
        imageSrc: 'https://example.com/image.jpg',
        price: 5000,
        unit: 'шт',
        title: 'Тестовый продукт',
        status: 'normal'
      },
      global: {
        stubs: {
          'v-img': true,
          'v-btn': true
        }
      }
    })
    
    const text = wrapper.text();
    // Проверяем отображение цены по частям
    expect(text).toContain('5'); // Проверяем наличие цифры 5
    expect(text).toContain('000'); // Проверяем наличие 000
    expect(text).toContain('₽'); // Проверяем символ рубля
    
    // Проверяем отображение единицы измерения
    expect(text).toContain('шт')
    
    // Проверяем отображение заголовка
    expect(text).toContain('Тестовый продукт')
  })
  
  it('показывает сообщение "Нет фото", если изображение не предоставлено', () => {
    const wrapper = mount(ProductCard, {
      props: {
        views: 150,
        days: 3,
        imageSrc: undefined,
        price: 5000,
        unit: 'шт',
        title: 'Тестовый продукт',
        status: 'normal'
      },
      global: {
        stubs: {
          'v-img': true,
          'v-btn': true
        }
      }
    })
    
    // Проверяем наличие сообщения "Нет фото"
    expect(wrapper.text()).toContain('Нет фото')
  })
  
  it('показывает сообщение о продвижении, если статус "promoted"', () => {
    const wrapper = mount(ProductCard, {
      props: {
        views: 150,
        days: 3,
        imageSrc: 'https://example.com/image.jpg',
        price: 5000,
        unit: 'шт',
        title: 'Тестовый продукт',
        status: 'promoted'
      },
      global: {
        stubs: {
          'v-img': true,
          'v-btn': true
        }
      }
    })
    
    // Проверяем наличие сообщения о продвижении
    expect(wrapper.text()).toContain('Объявление продвигается')
  })
  
  it('показывает кнопку продвижения, если статус "promote"', () => {
    const wrapper = mount(ProductCard, {
      props: {
        views: 150,
        days: 3,
        imageSrc: 'https://example.com/image.jpg',
        price: 5000,
        unit: 'шт',
        title: 'Тестовый продукт',
        status: 'promote'
      },
      global: {
        stubs: {
          'v-img': true,
          'v-btn': { 
            template: '<button><slot></slot></button>',
            name: 'v-btn'
          }
        }
      }
    })
    
    // Проверяем наличие текста о увеличении просмотров
    expect(wrapper.text()).toContain('Увеличьте количество просмотров')
    
    // Проверяем наличие элемента кнопки
    const btnElement = wrapper.find('button');
    expect(btnElement.exists()).toBe(true);
  })
  
  it('показывает сообщение о скрытии, если статус "hidden"', () => {
    const wrapper = mount(ProductCard, {
      props: {
        views: 150,
        days: 3,
        imageSrc: 'https://example.com/image.jpg',
        price: 5000,
        unit: 'шт',
        title: 'Тестовый продукт',
        status: 'hidden'
      },
      global: {
        stubs: {
          'v-img': true,
          'v-btn': true
        }
      }
    })
    
    // Проверяем наличие сообщения о скрытии
    expect(wrapper.text()).toContain('Объявление скрыто')
  })
}) 