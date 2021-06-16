import * as React from 'react';
import { Appbar, Card, Button, Title, BottomNavigation, Text } from 'react-native-paper';
import { View, ScrollView, SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native';

const Home = ({navigation}) => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    const CampaignsRoute = () =>
        <FlatList
            data={CampaingData}
            renderItem={renderCampItem}
            keyExtractor={item => item.id}
            style={{ flex: 1 }}
        />;

    const CharactersRoute = () =>
        <FlatList
            data={CharacterData}
            renderItem={renderCharItem}
            keyExtractor={item => item.id}
            style={{ flex: 1 }}
        />;


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'campaigns', title: 'Campaigns', icon: 'account-box' },
        { key: 'characters', title: 'Characters', icon: 'account-box' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        campaigns: CampaignsRoute,
        characters: CharactersRoute,

    });

    const CharacterData = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Grendelin',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Tozog',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Arysis Wynwyn',
        },

    ];

    const CampaingData = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Emerald Covenant',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'The other one',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'ANOTHA ONE',
        },

    ];

    const CampItem = ({ title, id }) => (
        <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/650' }} />
            <Card.Content>
                <Title>{title}</Title>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => navigation.push('Campaign', {
                    cId: id,
                    cName: title
                })}>View</Button>
            </Card.Actions>
        </Card>
    );

    const renderCampItem = ({ item }) => (
        <CampItem title={item.title} id={item.id} />
    );

    const CharItem = ({ title, id }) => (
        <Card>
            <Card.Cover source={{ uri: 'https://picsum.photos/650' }} />
            <Card.Content>
                <Title>{title}</Title>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => navigation.push('Character', {
                    cId: id,
                    cName: title
                })}>View</Button>
            </Card.Actions>
        </Card>
    );

    const renderCharItem = ({ item }) => (
        <CharItem title={item.title} id={item.id} />
    );

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Stat Track" />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>

            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                sceneAnimationEnabled={true}

            />

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
});

export default Home;