import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
// Erstellen der Styles
// Erstellen der Styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 30,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        backgroundColor: '#000',
        color: '#fff',
        padding: 8,
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
        objectFit: 'cover',
    },
    infoContainer: {
        flexDirection: 'column',
        flexGrow: 1,
    }
});

// Dokumenten-Komponente
const MyDocument = ({ address, image }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Personal Information</Text>
                <Image
                    style={styles.image}
                    src= {image}
                />
                <View style={styles.section}>
                    <Text>First Name: {address.firstName}</Text>
                    <Text>Last Name: {address.lastName}</Text>
                    <Text>Street: {address.street}</Text>
                    <Text>City: {address.city}</Text>
                    <Text>Zip Code: {address.zipcode}</Text>
                    <Text>Country: {address.country}</Text>
                    <Text>Birth Date: {address.birthdate}</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default MyDocument;