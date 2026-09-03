import { Link } from 'expo-router';
import {View, StyleSheet, FlatList, Text, Touchable, TouchableOpacity, Image,} from 'react-native';

function renderCategoria({ item } : {item:any}) {
  return (
    <View>
    <View style={styles.titulo}>
      {item.titulo}
      </View>
      <FlatList
      data={item.filmes}
      keyExtractor={filme => filme.id}
      horizontal={true}
      // showsHorizontalScrollIndicator = {false}
      // contentContainerStyle={{ paddingBottom: 40 }}
      renderItem={({ item }) => (
        <Link href='/sla'>
       <TouchableOpacity style={styles.bott}>    
          <View style={styles.filme}>
            <Image 
            source={{uri:item.Imagem}}
            style={styles.imagem}
            />
              <Text style={styles.filmeTitulo}>{item.titulo}
              </Text>
           </View>
           </TouchableOpacity>
        </Link>
      )}
      />
   
    
    </View>
       
    )
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