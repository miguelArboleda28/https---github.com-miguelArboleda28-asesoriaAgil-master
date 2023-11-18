// RegistrarAsignaturaProfesor.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { setAsignatura, getAsignatura } from './Asignatura';
import { useNavigation, useRoute } from '@react-navigation/native';

const RegistrarAsignaturaProfesor = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const route = useRoute();
  
  const { cedula } = route.params;
  const handleEnviar = () => {
      // Guardar la asignatura en el array
      const nuevaAsignatura = {
          nombre,
          dia,
          horario,
          ubicacion,
          descripcion,
      };
      setAsignatura(nuevaAsignatura);
      console.log("Asignatura enviada:", nuevaAsignatura);
      console.log("Asignaturas actualizadas:", getAsignatura());

      setAsignatura([...getAsignatura(), nuevaAsignatura]);  // Actualizar el array de asignaturas

    // Reiniciar el formulario
    setNombre('');
    setDia('');
    setHorario('');
    setUbicacion('');
    setDescripcion('');
  };

  const navigateToAsignaturaProfesor = () => {
    navigation.navigate('AsignaturaProfesor', { cedula });
  };

  return (
    <View style={styles.container}>
      <Text>Registrar Asignatura</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite los dias de la asesoria seguidos ejm: Lunes- Jueves"
        value={dia}
        onChangeText={setDia}
      />
      <TextInput
        style={styles.input}
        placeholder="hora de inicio y fin ejm: 12:00-13:00"
        value={horario}
        onChangeText={setHorario}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={ubicacion}
        onChangeText={setUbicacion}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <Button title="Enviar" onPress={handleEnviar} />
      <Button title="Ver asignaturas registradas" onPress={navigateToAsignaturaProfesor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default RegistrarAsignaturaProfesor;
