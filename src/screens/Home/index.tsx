import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IMAGES } from '../../assests/images';
import { Label } from '../../components';
import { COLOR } from '../../enums/StyleGuide';
import { SCREEN } from '../../enums/AppEnums';
import { url } from '../../api/urls';
import { api } from '../../api';
import { styles } from './style';
import { ImageUrl, SecondImageUrl } from '../../utils/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { errorToast } from '../../utils/Toast';

const Home = (props: any) => {
  const { navigation } = props
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([]);
  const [categoriesListData, setCategoriesListData] = useState([])
  const [homeList, setHomeList] = useState([])
  const [userData, setUserData] = useState<any>({})

  //* To Get UserData
  const getUserData = async () => {
    const userId: any = await AsyncStorage.getItem('UserId')

    const userData = {
      id: userId,
    }

    try {
      const response = await api.post(url.GetUser, userData)
      if (response?.data?.status == true) {
        setUserData(response?.data?.user)
      } else {
        errorToast('unable to fetch user data')
      }
    } catch (error) {
      console.error('error', error);
    }
  }

  //* To Get All Categories
  const fetchCategories = async () => {
    setLoading(true)
    try {
      const response = await api.get(url.HomeData,);
      setCategories(response?.data?.front_data?.categories)
      setSubCategories(response?.data?.front_data?.sub_categories)
      setCategoriesListData(response?.data?.front_data?.sub_categories)
      setLoading(false)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  //* To Get All Products
  const fetchHomeList = async () => {
    try {
      const response = await api.get(url.HomeProductList)
      setHomeList(response.data.products)
    } catch (error) {
      console.error('Error:', error);
    }
  }


  //* To Get Filtered SubCategories
  // const handleCategoryPress = (index, categoryId) => {
  //   setSelectedIndex(index);
  //   const filteredSubCategories = subCategories.filter(subCat => subCat.parent_category === categoryId.toString());
  //   setCategoriesListData(filteredSubCategories);
  // }

  useEffect(() => {
    fetchCategories()
    getUserData()
    fetchHomeList()
  }, [])

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.Loader}>
          <ActivityIndicator size={'large'} color={COLOR.primary} />
        </View>
      ) : (
        <>
          <View style={styles.Header}>
            <View style={styles.IconSection}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={IMAGES.DrawerMenu} style={{ height: 33, width: 33 }} />
              </TouchableOpacity>
              <Image source={userData?.image ? { uri: `${ImageUrl}${userData?.image}` } : IMAGES.Profile} style={{ height: 50, width: 50 }} />
            </View>
            <Label style={styles.FindFoodLabel}>Find best Food{'\n'}for your pet</Label>
          </View>

          <Label style={[styles.SpecialLabel, styles.SpecialSection]}>Special Bundle</Label>
          <Image source={IMAGES.DiscountPic} style={{ width: '100%', height: 125, resizeMode: 'contain', marginTop: '4%' }} />
          <Label style={styles.SpecialLabel}>Categories</Label>

          {/* Categories */}
          <View style={{ marginTop: '4%' }}>
            <FlatList
              data={categories}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingLeft: '5%' }}
              renderItem={({ item, index }: any) => {
                const isSelected = index === selectedIndex;
                return (
                  <TouchableOpacity activeOpacity={1} onPress={() => setSelectedIndex(index)}
                  //  onPress={() => handleCategoryPress(index, item.id)}
                  >
                    <View style={[styles.CategoriesNameList, isSelected && { backgroundColor: COLOR.primary }]}>
                      <Label style={[styles.CategoriesName, isSelected && { color: COLOR.white }]}>{item.name}</Label>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* SubCategory */}
          <View style={{ marginTop: '8%', marginBottom: '5%' }}>
            <FlatList
              // data={categoriesListData}
              data={homeList}
              horizontal={true}
              contentContainerStyle={{ paddingLeft: '5%' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }: any) => {
                return (
                  <TouchableOpacity style={styles.CategoriesList} onPress={() => navigation.navigate(SCREEN.ProductDetail, {
                    item: item,
                  })}>
                    <Image
                      source={{ uri: `${ImageUrl}${item?.image}` }}
                      style={{ height: 120, width: 120, resizeMode: 'contain' }}
                    />
                    <Label style={styles.CategoriesName}>{item.name}</Label>
                    {/* <Label style={styles.CategoriesName}>{item.price}</Label> */}
                  </TouchableOpacity>
                );
              }}
            />
          </View>

        </>
      )}

    </View>
  );
};

export default Home;
