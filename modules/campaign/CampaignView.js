import * as React from 'react';
import { Appbar, Card, Button, Title, Avatar, IconButton, Paragraph } from 'react-native-paper';
import { View, ScrollView, SafeAreaView, StyleSheet, StatusBar, FlatList, Image, Dimensions } from 'react-native';

const Campaign = ({ route, navigation }) => {

    const _goBack = () => navigation.goBack();

    const { cId, cName } = route.params;

    const Heros = [
        {
            cId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b2',
            cName: 'Grendelin',
            cClass: 'Rogue',
        },
        {
            cId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
            cName: 'Tozog',
            cClass: 'Barbarian',
        },
        {
            cId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
            cName: 'Arysis Wynwyn',
            cClass: 'Cleric',
        },
        {
            cId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b5',
            cName: 'Father Elijah',
            cClass: 'Gun Slinger',
        },
        {
            cId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b6',
            cName: 'Eliana',
            cClass: 'Druid',
        },
        {
            cId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            cName: 'Rold',
            cClass: 'Goat',
        },

    ];

    const Item = ({ cName, cClass, cId }) => (
        <Card.Title
            title={cName}
            subtitle={cClass}
            left={(props) => <Avatar.Icon {...props} icon="account" />}
            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
        />
    );

    const renderItem = ({ item }) => (
        <Item cName={item.cName} cClass={item.cClass} cId={item.cId} />
    );

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title={cName} />
            </Appbar.Header>
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={styles.headerContainer}>
                            <View>
                                <Image style={styles.headerPic} source={{ uri: 'https://picsum.photos/650' }} />
                            </View>
                        </View>
                        <Title style={styles.sectionTitle}>The Party</Title>
                    </>
                }
                data={Heros}
                renderItem={renderItem}
                keyExtractor={item => item.cId}
                style={{ flex: 1 }}
                scrollEnabled='true'
                ListFooterComponent={
                    <>
                        <Title style={styles.sectionTitle}>Party Stats</Title>
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
                    </>
                }
            />
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

export default Campaign;