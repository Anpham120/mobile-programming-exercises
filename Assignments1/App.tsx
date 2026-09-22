import { StatusBar, Text, View } from 'react-native';

import { styles } from './styles';

type BoxProps = {
  color: string;
  number: string;
  dark?: boolean;
};

// Một ô màu, số nằm giữa. dark = số màu đen (dùng cho nền vàng)
function Box({ color, number, dark }: BoxProps) {
  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text style={[styles.number, dark && styles.numberDark]}>{number}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.grid}>
        {/* Hàng 1: ô 1 và ô 2 chia đều */}
        <View style={styles.row}>
          <Box number="1" color="#1E7FEF" />
          <Box number="2" color="#EA3A34" />
        </View>

        {/* Hàng 2: ô 3 + ô 4 gộp lại rộng bằng ô 1, ô 5 rộng bằng ô 2 */}
        <View style={styles.row}>
          <View style={styles.half}>
            <Box number="3" color="#FCD216" dark />
            <Box number="4" color="#22A04F" />
          </View>
          <Box number="5" color="#7B2FE0" />
        </View>

        {/* Hàng 3: ô 6 rộng bằng ô 1, bên phải để trống */}
        <View style={styles.lastRow}>
          <Box number="6" color="#F98307" />
          <View style={styles.spacer} />
        </View>
      </View>

      <View style={styles.footerArea}>
        <Text style={styles.footer}>Phạm Duy An - MSSV: BIT240002</Text>
      </View>
    </View>
  );
}
