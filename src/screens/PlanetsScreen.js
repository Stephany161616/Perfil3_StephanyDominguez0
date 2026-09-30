import { FlatList, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import ErrorState from '../components/ErrorState';
import FilterTabs from '../components/FilterTabs';
import usePlanets from '../hooks/usePlanets';
import { gap, palette } from '../styles/palette';

export default function PlanetsScreen() {
  const { planets, filters, filter, setFilter, isLoading, isError, message, reload } = usePlanets();

  if (isLoading) return <Spinner label="Buscando planetas..." />;
  if (isError) return <ErrorState message={message} onRetry={reload} />;

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={planets}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<FilterTabs options={filters} active={filter} onChange={setFilter} />}
      ListEmptyComponent={<Text style={styles.empty}>No hay planetas en esta categoría.</Text>}
      renderItem={({ item }) => (
        <Card
          name={item.name}
          image={item.image}
          description={item.description}
          destroyed={item.destroyed}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: palette.canvas,
  },
  content: {
    padding: gap.large,
  },
  empty: {
    color: palette.inkSoft,
    textAlign: 'center',
    marginTop: gap.huge,
    fontSize: 15,
  },
});
