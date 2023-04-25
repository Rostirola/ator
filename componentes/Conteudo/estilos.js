import { StyleSheet , ScrollView} from 'react-native';

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitulo: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragrafo: {
    marginTop: 1,
    textAlign: 'justify',
  },
  imagem: {
    width: 400,
    height: 600,
    marginTop: 1,
    marginBottom: 10,
    alignSelf: 'center',
  } 
});

export default estilos;