import { Image, StyleSheet, Text, View } from 'react-native';
import { corner, gap, palette } from '../styles/palette';

export default function Card({ name, image, description, destroyed }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
        ) : (
          <Text style={styles.noImage}>🪐</Text>
        )}
        <View style={[styles.badge, destroyed ? styles.badgeDestroyed : styles.badgeAlive]}>
          <Text style={[styles.badgeText, { color: destroyed ? palette.destroyed : palette.alive }]}>
            {destroyed ? 'Destruido' : 'En pie'}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description} numberOfLines={5}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.paper,
    borderRadius: corner.round,
    marginBottom: gap.large,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: palette.ink,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  imageWrap: {
    height: 190,
    backgroundColor: palette.roseSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '85%',
    height: '85%',
  },
  noImage: {
    fontSize: 56,
  },
  badge: {
    position: 'absolute',
    top: gap.small,
    right: gap.small,
    borderRadius: corner.full,
    paddingHorizontal: gap.small,
    paddingVertical: 4,
  },
  badgeAlive: {
    backgroundColor: palette.aliveSoft,
  },
  badgeDestroyed: {
    backgroundColor: palette.destroyedSoft,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  content: {
    padding: gap.base,
    gap: gap.tiny,
  },
  name: {
    color: palette.ink,
    fontSize: 20,
    fontWeight: '800',
  },
  description: {
    color: palette.inkSoft,
    fontSize: 14,
    lineHeight: 21,
  },
});
