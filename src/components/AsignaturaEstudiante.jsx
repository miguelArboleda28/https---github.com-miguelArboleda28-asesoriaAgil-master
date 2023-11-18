import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAsignatura } from './Asignatura';
import { useRoute } from '@react-navigation/native';

const AsignaturaEstudiante = () => {
  const [selectedAsignatura, setSelectedAsignatura] = useState(null);
  const route = useRoute();
  const { cedula } = route.params;
  const navigation = useNavigation();

  const navigateToRegistrarAsignaturaEstudiante = () => {
    navigation.navigate('RegistrarAsignaturaEstudiante', { cedula });
  };

  return (
    <View style={styles.container}>
      {/* Barra de navegación */}
      <View style={styles.navBar}>
        <Text style={styles.navText} onPress={() => navigation.goBack()}>
          Atrás
        </Text>
      </View>

      {/* Cuerpo de la página */}
      <View style={styles.body}>
        <Text>Mis Asignaturas</Text>
        {/* Muestra la información de la asignatura seleccionada */}
        {selectedAsignatura && (
          <View style={styles.containerAsignatura}>
            <Image style={styles.image} source={require('./img/metodologias.png')} />
            <Text style={styles.title}>{selectedAsignatura.nombre}</Text>
            <Text style={styles.subtitle}>{selectedAsignatura.descripcion}</Text>
          </View>
        )}

        <Button title="Seleccionar Asignatura" onPress={navigateToRegistrarAsignaturaEstudiante} />
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
  body: {
    padding: 16,
  },
  containerAsignatura: {
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default AsignaturaEstudiante;
