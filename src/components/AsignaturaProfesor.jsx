// AsignaturaProfesor.jsx
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usuario from './Usuario';
import { getAsignatura } from './Asignatura';


const AsignaturaProfesor = ({ route }) => {
  const { cedula } = route.params;
  const navigation = useNavigation();
  const profesor = usuario.find(user => user.cedula === cedula);

  const navigateToRegistrarAsignaturaProfesor = () => {
    navigation.navigate('RegistrarAsignatura', { cedula });
  };

  return (
    <View style={styles.container}>
      {/* Barra de navegación */}
      <View style={styles.navBar}>
        <Text style={styles.navText} onPress={() => navigation.goBack()}>
          Atrás
        </Text>
      </View>

      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.facultadText}>{profesor.facultad}</Text>
        <Text>{`${profesor.nombre} ${profesor.apellido}`}</Text>
      </View>

      {/* Cuerpo de la página */}
      <View style={styles.body}>
        <Text>Mis Asesorías</Text>
        {/* Aquí podrías mostrar las asignaturas específicas del profesor */}
      </View>

      {/* <View style={styles.containerLanding}>
        <Image
          style={styles.image}
          source={require("./img/calculo.jpg")}
        />
        <Text style={styles.title}>
          Mi Landing Page
        </Text>
        <Text style={styles.subtitle}>
          Hola soy su profesor de calculo y sere el encargado de las asesorias {'\n'} de calculo 
          la vamos a pasar super delicioso je je je 
        </Text>
        <Button title="Registrar" onPress={navigateToRegistrarAsignaturaProfesor} />
      </View> */}

      <View style={styles.body}>
        {/* Mostrar las asignaturas específicas del profesor */}
        <View style={styles.containerAsignaturas}>
    {/* Mostrar las asignaturas específicas del profesor */}
      {getAsignatura().map((asignaturaItem, index) => (
        <View key={index} style={styles.containerAsignatura}>
          <Image style={styles.image} source={require('./img/metodologias.png')} />
          <Text style={styles.title}>{asignaturaItem.nombre}</Text>
          <Text style={styles.subtitle}>{asignaturaItem.descripcion}</Text>
        </View>
     ))}
    </View>
  </View>

      {/* Pie de página */}
      <View style={styles.footer}>
        <Text style={styles.footerText} onPress={() => navigation.navigate('Login')}>
          Regresar al Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  navBar: {
    backgroundColor: '#D88A0D',
    padding: 10,
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  facultadText: {
    color: 'black',
    fontSize: 20,
  },
  body: {
    padding: 16,
  },
  containerLanding: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    alignItems: 'center',
  },
  footerText: {
    color: '#007BFF',
  },
  containerAsignaturas: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F2F2F2', 
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    
  },
});

export default AsignaturaProfesor;

