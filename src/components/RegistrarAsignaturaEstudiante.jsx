import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';
import { getAsignatura } from './Asignatura';


const RegistrarAsignaturaEstudiante = ({navigation}) => {
  const [selectedAsignatura, setSelectedAsignatura] = useState('');
  const [asignaturasRegistradas, setAsignaturasRegistradas] = useState([]);

  useEffect(() => {
    // Obtener las asignaturas registradas al cargar el componente
    setAsignaturasRegistradas(getAsignatura());
  }, []);

  const handleEnviar = () => {
    // Implementa aquí la lógica para enviar la asignatura seleccionada
    // Puedes agregar cualquier acción adicional que desees realizar
    // por ejemplo, navegar a otra pantalla o realizar una solicitud al servidor.
    if (selectedAsignatura) {
      console.log(`Has seleccionado la asignatura: ${selectedAsignatura}`);
    } else {
      console.log('Por favor, selecciona una asignatura.');
    }
  };

  const navigateToAsignaturaEstudiante = () => {
    navigation.navigate('AsignaturaEstudiante', { cedula });
  };

  return (
    <View style={styles.container}>
      <Text>Registrar Asignatura</Text>

      {/* Lista desplegable (Picker) para seleccionar la asignatura */}
      <Picker
        selectedValue={selectedAsignatura}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setSelectedAsignatura(itemValue)}>
        <Picker.Item label="Selecciona una asignatura..." value={null} />
        {asignaturasRegistradas.map((asignaturaItem, index) => (
          <Picker.Item
            key={index}
            label={`${asignaturaItem.nombre} - ${asignaturaItem.dia} - ${asignaturaItem.horario}`}
            value={asignaturaItem.nombre}
          />
        ))}
      </Picker>

      <Button title="Enviar" onPress={handleEnviar} />
      <Button title="Ver asignaturas registradas" onPress={navigateToAsignaturaEstudiante} />
      {/* Eliminé el botón para "Ver asignaturas registradas" ya que no hay campos adicionales para mostrar */}
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

export default RegistrarAsignaturaEstudiante;
