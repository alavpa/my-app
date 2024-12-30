import { PokemonItem } from "@/src/models/Pokemons";
import { Link } from "expo-router";
import { Text, StyleSheet } from 'react-native';

type PokemonItemProps = {
    item: PokemonItem;
}

const Item = (props: PokemonItemProps) => {
    return <Link
        href={{
            pathname: "/details/[url]",
            params: { url: props.item.url }
        }}
        style={styles.linkItem}>
        <Text style={styles.linkText}>{props.item.name}</Text>
    </Link>;

};

export default Item;

const styles = StyleSheet.create({
    linkItem: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
        borderRadius: 16, // Adds rounded corners
        margin: 8, // Optional: Adds spacing around the container
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Adds a shadow effect
        elevation: 5, // Adds elevation for Android shadow
    },
    linkText: {
        fontSize: 18,
    },
});