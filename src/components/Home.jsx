import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Home = ({ route }) => {
    // Aquí asumimos que pasamos el nombre del estudiante como una propiedad de navegación.
    const { studentName } = route.params;

    return (
        <View style={styles.container}>
           
            <Text style={styles.studentName}>Bienvenido, {studentName}</Text>
            <Text style={styles.welcomeText}>
                Bienvenido a Asesoría Ágil. Descubre nuestro servicio de tutorías en la Universidad de Envigado. Con horarios flexibles y personalizados, conectamos estudiantes y profesores para un aprendizaje enriquecedor. Reserva sesiones de asesoría, interactúa con tus profesores y accede a recursos de apoyo. Una experiencia colaborativa que potencia tu crecimiento académico.
            </Text>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Asesoría Disponible"
                    onPress={() => {
                        // Navegar a la página de asesoría disponible
                    }}
                />
                <Button
                    title="Reportar Novedad"
                    onPress={() => {
                        // Navegar a la página de reporte de novedades
                    }}
                />
                <Button
                    title="Historias de Asesorías"
                    onPress={() => {
                        // Navegar a la página de historias de asesorías
                    }}
                />
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
    image: {
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginBottom: 16,
    },
    studentName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    welcomeText: {
        textAlign: 'center',
        marginBottom: 24,
    },
    buttonsContainer: {
        width: '100%',
    },
});

export default Home;
