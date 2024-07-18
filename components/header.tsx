import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export function Header() {
  const [search, setSearch] = useState('');

  return (
    <View>
      <Text style={styles.text}>Discover</Text>
      <SearchBar
        placeholder="Pesquise"
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
        inputStyle={styles.searchText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 46,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    marginRight: 100,
    marginLeft: 100,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchInput: {
    backgroundColor: '#fff',
  },
  searchText: {
    color: '#000',
    paddingLeft: 20,
  },
});
