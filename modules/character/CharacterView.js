import * as React from 'react';
import { Appbar, Card, Button, Title, Avatar, IconButton, Paragraph } from 'react-native-paper';
import { View, ScrollView, SafeAreaView, StyleSheet, StatusBar, FlatList, Image, Dimensions } from 'react-native';

const Character = ({ route, navigation }) => {

    const _goBack = () => navigation.goBack();

    const { cId, cName } = route.params;


    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title={cName} />
            </Appbar.Header>

            <ScrollView>
            <View style={styles.headerContainer}>
                <View>
                    <Image style={styles.headerPic} source={{ uri: 'https://picsum.photos/650' }} />
                </View>
            </View>

    <Title style={styles.sectionTitle}>{cName}</Title>
            <View style={styles.cardContainer}>

                <Card style={{ flex: 1, width: '40%', height: 100 }}>
                    <Card.Content>
                        <Title>Damage Delt</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={{ flex: 1, width: '40%', height: 100 }}>
                    <Card.Content>
                        <Title>Damage Taken</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
            </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        margin: 20
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    headerContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    headerPic: {
        width: Dimensions.get('window').width,

        height: 250,
        resizeMode: 'cover'
    },
    cardContainer: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});

export default Character;