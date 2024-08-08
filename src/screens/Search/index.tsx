import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { Label, Pressable } from '../../components';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../../enums/StyleGuide';
import { IMAGES } from '../../assests/images';

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    { name: 'Dog food' },
    { name: 'Cat food' },
    { name: 'Horse food' },
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleRemoveItem = (index) => {
    const newData = [...filteredData];
    newData.splice(index, 1);
    setData(newData);
    setFilteredData(newData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())));
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const newFilteredData = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(newFilteredData);
  };

  return (
    <View style={styles.container}>
      <Header title='Search' onPress={() => navigation.goBack()} />

      <View style={styles.SearchBoxStyling}>
        <TextInput
          placeholder='Search here....'
          placeholderTextColor={COLOR.grey_1}
          style={styles.SerachTextInput}
          value={searchText}
          onChangeText={handleSearch}
        />
        <Pressable>
          <Image source={IMAGES.SearchBlack} style={styles.SearchIcon} />
        </Pressable>
      </View>

      <View style={{ marginTop: '12%' }}>
        <FlatList
          data={filteredData}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: '5%' }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.SearchListBox}>
              <Label style={styles.SearchListLabel}>{item.name}</Label>
              <TouchableOpacity style={styles.CrossCircle} onPress={() => handleRemoveItem(index)}>
                <Image source={IMAGES.CrossIcon} style={styles.CrossIcon} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Search;
