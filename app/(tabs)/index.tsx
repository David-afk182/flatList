import { Link } from 'expo-router';
import {View, StyleSheet, FlatList, Text, Touchable, TouchableOpacity, Image,} from 'react-native';
import DadosDosFilmes from '../componentes/coisas';
import renderCategoria from '../componentes/cardCategorias';

const categorias = DadosDosFilmes();
console.log(categorias);
 
export default function App() {
    return (
      <View style={styles.backcolor}>
        <FlatList
          data={categorias}
          keyExtractor={i => i.id}
          renderItem={renderCategoria }
        />
      </View>
 
    );
}

const styles = StyleSheet.create({
 
    backcolor:{
    backgroundColor: '#c04949',
    flex: 1,
  },
 
  cont1:{
    fontSize: 30,
    color:'#ffff',
    margin: 20,
  },
 
  bott:{
    
  },
  imagem: {
    flex: 1,
    borderRadius: 6,

  },

  titulo:{
    width: 180,
    color:'#ffff',
    fontSize: 22,
    fontFamily:'Arial',
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#a1a1a1",
    textAlign: "center",
    margin: 6,
  },
  filme:{
    width: 160,
    height: 230,
    backgroundColor: '#000',
    margin: 7,
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 5,
  },
  filmeTitulo:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
       
});