// LandingPage.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import asignatura from './Asignatura';

const LandingPage = () => {
  const navigation = useNavigation();

  const handleAsignaturaClick = () => {
    // Redirigir a la clase AsignaturaProfesor
    navigation.navigate('AsignaturaProfesor');
  };

  return (
    <View style={styles.container}>
      <Text>Mis Asesorías</Text>
      {/* Landing page vacía, puedes mostrar las asignaturas aquí */}
      {asignatura.map((asignatura, index) => (
        <Text key={index}>{asignatura.nombre}</Text>
      ))}
      <TouchableOpacity onPress={handleAsignaturaClick}>
        <Text>Ir a AsignaturaProfesor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingPage;
