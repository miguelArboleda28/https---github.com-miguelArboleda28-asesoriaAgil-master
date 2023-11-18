import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

const horarioAsesoria = ({ route }) => {
    const { asignatura } = route.params;
    const [selectedHorario, setSelectedHorario] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const horariosDisponibles = [
        'Horario 1',
        'Horario 2',
        'Horario 3',
        // Agrega más horarios disponibles según tus necesidades
    ];

    const handleHorarioSelection = (horario) => {
        setSelectedHorario(horario);
        setModalVisible(true);
    };

    const handleConfirm = () => {
        // Aquí puedes agregar la lógica para confirmar la asistencia
        // Por ejemplo, puedes realizar una solicitud al servidor para registrar la asistencia
        setModalVisible(false);
    };

    const handleCancel = () => {
        setSelectedHorario(null);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Horarios Disponibles para {asignatura}</Text>

            <View style={styles.horariosContainer}>
                {horariosDisponibles.map((horario) => (
                    <TouchableOpacity
                        key={horario}
                        style={styles.horarioButton}
                        onPress={() => handleHorarioSelection(horario)}
                    >
                        <Text>{horario}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Confirmar Asistencia</Text>
                    <Text>{asignatura}</Text>
                    <Text>{selectedHorario}</Text>
                    <Button title="Aceptar" onPress={handleConfirm} />
                    <Button title="Cancelar" onPress={handleCancel} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    horariosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    horarioButton: {
        alignItems: 'center',
        margin: 16,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default horarioAsesoria;
