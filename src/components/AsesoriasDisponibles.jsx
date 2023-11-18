import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AsesoriasDisponibles = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Facultad de Ingeniería</Text>
            <Text style={styles.subtitle}>Asignaturas con Asesorías Disponibles</Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('./img/calculo.jpg')} style={styles.buttonImage} />
                    <Text>Calculo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={require('./img/logica.png')} style={styles.buttonImage} />
                    <Text>Lógica de Programación I</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image source={require('./img/metodologias.png')} style={styles.buttonImage} />
                    <Text>Metodología del Desarrollo</Text>
                </TouchableOpacity>

                {/* Agrega más botones para otras asignaturas */}
            </View>
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
    subtitle: {
        fontSize: 18,
        marginBottom: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        margin: 16,
    },
    buttonImage: {
        width: 100,
        height: 100,
        marginBottom: 8,
    },
});

export default AsesoriasDisponibles;
