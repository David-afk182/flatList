import {View, StyleSheet, FlatList, Text, Touchable, TouchableOpacity, Image} from 'react-native';
 
const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "1b", titulo: "Duna 2", cor: "#16213e", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "1d", titulo: "Poor Things", cor: "#533483", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a", Imagem:"https://th.bing.com/th/id/R.966d60ed07d4ff25a4b7e71a853c6b7f?rik=mnfwbD7WZift0A&pid=ImgRaw&r=0" },
    ],
  },
];
 
 
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
       <TouchableOpacity style={styles.bott}>    
          <View style={styles.filme}>
            <Image 
            source={{uri:item.Imagem}}
            style={styles.imagem}
            />
              <Text style={styles.filmeTitulo}>{item.titulo}</Text>
           </View>
           </TouchableOpacity>
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