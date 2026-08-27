import {View, StyleSheet, FlatList, Text, Touchable, TouchableOpacity, Image, ImageBackground} from 'react-native';


export default function App() {
    return (
      <View style={styles.fundo}>
        <ImageBackground
          source={require('../imagens/oppenheimer.jpg')}
          style={styles.imagem}>
            <Image source={require('../imagens/play.webp')} style={styles.play}
            />
            <Image source={require('../imagens/Classificação_Indicativa_14_anos.svg.webp')} style={styles.classificacao}
            />
          </ImageBackground>
        <View style={styles.informacoes}>
        <Text style={styles.titulo}>Oppenheimer</Text>
          <Text style={styles.descricao}>Descrição: Um retrato cinematográfico do físico Robert Oppenheimer, que liderou o Projeto Manhattan durante a Segunda Guerra Mundial.</Text>
          <Text style={styles.duracao}>Duração: 3h 15min</Text>
          <Text style={styles.duracao}>Gênero: Drama, História, Biografia</Text>
          <Text style={styles.duracao}>Diretor: Christopher Nolan</Text>
          <Text style={styles.avaliacao}>Avaliação: 8.5/10</Text>
      </View>

      </View>
    );
}

const styles = StyleSheet.create({

fundo: {
  flex: 1,
   backgroundColor: "#c04949",
},

imagem: {
  width: "auto",
  height: 400,
  borderRadius: 10,
},

titulo: {
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "left",
  marginTop: 12,
  color: "#fff",
  marginHorizontal: 20,
},

descricao: {
  fontSize: 16,
  textAlign: "left",
  marginHorizontal: 20,
  color: "#fff",
  backgroundColor: "#757575",
  padding: 10,
  borderRadius: 6,
  marginTop: 5,
},

informacoes: {
  backgroundColor: "#757575",
  padding: 10,
  borderRadius: 6,
  marginTop: 16,
  marginHorizontal: 20,
},

play: {
  width: 110,
  height: 110,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: [{ translateX: -55 }, { translateY: -55 }],
  cursor: "pointer",
},

duracao: {
  fontSize: 16,
  textAlign: "left",
  marginHorizontal: 20,
  color: "#fff",
  marginTop: 5,
  fontWeight: "bold",
},

avaliacao: {
  fontSize: 16,
  textAlign: "left",
  marginHorizontal: 20,
  color: "#fff",
  marginTop: 5,
  fontWeight: "bold",
},

classificacao: {
  width: 50,
  height: 50,
  marginHorizontal: 10,
  marginTop: 10,
},

});    