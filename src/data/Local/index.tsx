import { IMAGES } from "../../assests/images";

export const slides = [
  { image: IMAGES.boarding1, title: 'Lorem ipsum', text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book` },
  { image: IMAGES.boarding2, title: 'Lorem ipsum', text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book` },
  { image: IMAGES.boarding3, title: 'Lorem ipsum', text: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book` }
]

export const CartListData = [
  { name: 'Pedigree Chicken And Vegetable Flavor', price: '$500', image: IMAGES.Image3, quantity: '1x' },
  { name: 'Parrot Food', price: '$270', image: IMAGES.Image2, quantity: '1x' },
  { name: 'INSPIRE', price: '$470', image: IMAGES.Image1, quantity: '1x' },
]

export const CategoriesData = [
  { name: 'All' },
  { name: 'Cat' },
  { name: 'Dog' },
  { name: 'Rabbit' },
  { name: 'Hourse' },
  { name: 'Fish' },
  { name: 'Parrot' },
]

export const CategoriesListData = [
  { id: '0', Image: IMAGES.Image1, name: 'Pedigree', price: '$500', description: `is simply dummy text of the printing and typesetting`, weight: '500 g' },
  { id: '1', Image: IMAGES.Image2, name: 'Dog Chow', price: '$200', description: `is simply dummy text of the printing and typesetting`, weight: '1 kg' },
  { id: '2', Image: IMAGES.Image3, name: 'Ultra Grain', price: '$270', description: `is simply dummy text of the printing and typesetting`, weight: '500 g' },
  { id: '3', Image: IMAGES.Image4, name: 'Proud Cat', price: '$100', description: `is simply dummy text of the printing and typesetting`, weight: '1 kg' },
  { id: '4', Image: IMAGES.Image5, name: 'Reflex Kitten', price: '$300', description: `is simply dummy text of the printing and typesetting`, weight: '500 g' },
  { id: '5', Image: IMAGES.Image6, name: 'Hygain Food', price: '$400', description: `is simply dummy text of the printing and typesetting`, weight: '1 kg' },
  { id: '6', Image: IMAGES.Image1, name: 'Versele-Laga', price: '$320', description: `is simply dummy text of the printing and typesetting`, weight: '1 kg' },
]

export const ProfileButton = [
  { title: 'Edit Profile', route: '' },
  { title: 'Account Settings', route: '' },
  { title: 'Privacy & Security', route: '' },
  { title: 'Chat', route: 'ChatScreen' },
  { title: 'Location', route: '' },
  { title: 'Log out' },

]