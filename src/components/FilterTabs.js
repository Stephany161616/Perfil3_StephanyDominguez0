import { Pressable, StyleSheet, Text, View } from 'react-native';
import { corner, gap, palette } from '../styles/palette';

export default function FilterTabs({ options, active, onChange }) {
  return (
    <View style={styles.row}>
      {options.map((option) => {
        const selected = option.key === active;
        return (
          <Pressable
            key={option.key}
            onPress={() => onChange(option.key)}
            style={[styles.tab, selected && styles.tabActive]}
            accessibilityRole="button"
            accessibilityState={{ selected }}
          >
            <Text style={[styles.text, selected && styles.textActive]}>
              {option.label} ({option.count})
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: gap.tiny,
    marginBottom: gap.large,
  },
  tab: {
    flex: 1,
    paddingVertical: gap.small,
    borderRadius: corner.full,
    backgroundColor: palette.paper,
    borderWidth: 1,
    borderColor: palette.line,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: palette.ink,
    borderColor: palette.ink,
  },
  text: {
    color: palette.inkSoft,
    fontSize: 13,
    fontWeight: '600',
  },
  textActive: {
    color: palette.paper,
  },
});
