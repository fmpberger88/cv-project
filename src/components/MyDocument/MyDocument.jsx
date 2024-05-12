import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
    family: 'OpenSans',
    src: 'http://example.com/fonts/open-sans.ttf', // Ersetzen Sie dies durch den tatsächlichen Pfad zur Schriftartdatei
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 30,
        lineHeight: 1.5,
        fontSize: 12,
    },
    header: {
        padding: 50,
        backgroundColor: '#4fa5c7',
        marginBottom: 30
    },
    section: {
        margin: 2,
        padding: 5,
    },
    title: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 8,
        fontSize: 20,
        marginBottom: 12,
        textAlign: 'center'
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginRight: 20,
        border: '3px solid #666',
        objectFit: 'cover',
    },
    personal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    personalSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    education: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    infoContainer: {
        flexDirection: 'column',
        flexGrow: 1,
    }
});

// Komponente für das Dokument
const MyDocument = ({ address, image, educations }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.infoContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{address.firstName} {address.lastName}</Text>
                    <View style={styles.personal}>
                        <View style={styles.personalSection}>
                            <Text>{address.street}</Text>
                            <Text> {address.zipcode} {address.city}</Text>
                            <Text>{address.country}</Text>
                            <Text>{address.birthdate}</Text>
                            <Text>{address.email}</Text>
                            <Text>{address.phone}</Text>
                        </View>
                        <Image style={styles.image} src={image} />
                    </View>
                </View>
                <Text style={styles.title}>Experience</Text>
                <Text style={styles.title}>Education</Text>
                {educations.map((edu, index) => (
                    <View key={index} style={styles.section}>
                        <Text style={styles.education}>{edu.degree} in {edu.fieldOfStudy} at {edu.school}</Text>
                        <Text>From: {edu.startYear} To: {edu.endYear}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

export default MyDocument;
