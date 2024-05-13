import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf'; // Pfad zur Roboto-Regular Schriftart
import RobotoBold from '../../assets/fonts/Roboto-Bold.ttf'; // Pfad zur Roboto-Bold Schriftart

Font.register({
    family: 'Roboto',
    fonts: [
        { src: RobotoRegular, fontWeight: 'normal' },
        { src: RobotoBold, fontWeight: 'bold' },
    ],
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#f3f4f6',
        padding: 30,
        fontFamily: 'Roboto', // Setze Roboto als Standardschriftart
        fontSize: 12,
        color: '#333',
    },
    header: {
        backgroundColor: '#4fa5c7',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
        color: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    personal: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    personalSection: {
        marginLeft: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        border: '3px solid #fff',
        objectFit: 'cover',
        backgroundColor: '#808080',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        borderBottom: '2px solid #4fa5c7',
        paddingBottom: 4,
    },
    section: {
        marginBottom: 10,
    },
    education: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    jobTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    jobDetails: {
        fontSize: 12,
    },
    infoContainer: {
        flexDirection: 'column',
        flexGrow: 1,
    },
    addressDetails: {
        marginBottom: 6,
    },
    date: {
        fontSize: 12,
        color: '#555',
    }
});

const MyDocument = ({ address, image, educations = [], experiences = [] }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.infoContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{address.firstName} {address.lastName}</Text>
                    <View style={styles.personal}>
                        <Image style={styles.image} src={image} />
                        <View style={styles.personalSection}>
                            <Text style={styles.addressDetails}>{address.street}, {address.zipcode} {address.city}</Text>
                            <Text style={styles.addressDetails}>{address.country}</Text>
                            <Text style={styles.addressDetails}>{address.birthdate}</Text>
                            <Text style={styles.addressDetails}>{address.email}</Text>
                            <Text style={styles.addressDetails}>{address.phone}</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Experience</Text>
                {experiences.length > 0 ? experiences.map((exp) => (
                    <View key={exp.id} style={styles.section}>
                        <Text style={styles.jobTitle}>{exp.jobTitle} at {exp.workingPlace}</Text>
                        <Text style={styles.date}>From: {exp.startYear} To: {exp.endYear}</Text>
                        <Text style={styles.jobDetails}>{exp.toDos}</Text>
                    </View>
                )) : <Text>No experience data available</Text>}

                <Text style={styles.sectionTitle}>Education</Text>
                {educations.length > 0 ? educations.map((edu) => (
                    <View key={edu.id} style={styles.section}>
                        <Text style={styles.education}>{edu.degree} in {edu.fieldOfStudy} at {edu.school}</Text>
                        <Text style={styles.date}>From: {edu.startYear} To: {edu.endYear}</Text>
                    </View>
                )) : <Text>No education data available</Text>}
            </View>
        </Page>
    </Document>
);

export default MyDocument;
