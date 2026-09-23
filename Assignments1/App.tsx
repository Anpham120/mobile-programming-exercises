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
        {/* Hàng 1 và hàng 2: mỗi ô rộng hết hàng, cả khối cao bằng hàng 3 */}
        <View style={styles.stack}>
          <Box number="1" color="#1E7FEF" />
          <Box number="2" color="#EA3A34" />
        </View>

        {/* Hàng 3: ô 3 + ô 4 gộp lại rộng nửa hàng, ô 5 rộng bằng ô 3, bên phải để trống */}
        <View style={styles.row}>
          <View style={styles.half}>
            <Box number="3" color="#FCD216" dark />
            <Box number="4" color="#22A04F" />
          </View>
          <View style={styles.half}>
            <Box number="5" color="#7B2FE0" />
            <View style={styles.spacer} />
          </View>
        </View>

        {/* Hàng 4: ô 6 rộng nửa hàng, bên phải để trống */}
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
