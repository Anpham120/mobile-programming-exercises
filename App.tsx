import { StatusBar, StyleSheet, Text, View } from 'react-native';

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

        {/* Hàng 3: ô 6 chiếm hết chiều ngang */}
        <View style={styles.lastRow}>
          <Box number="6" color="#F98307" />
        </View>
      </View>

      <View style={styles.footerArea}>
        <Text style={styles.footer}>Phạm Duy An - MSSV: BIT240002</Text>
      </View>
    </View>
  );
}

const GAP = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: GAP,
    // Android vẽ tràn viền (edge-to-edge) nên phải tự chừa chỗ cho thanh trạng thái
    paddingTop: (StatusBar.currentHeight || 0) + GAP,
  },

  // Khu vực lưới chiếm phần trên màn hình
  grid: {
    flex: 7,
  },
  // Hàng 1 và hàng 2
  row: {
    flex: 6,
    flexDirection: 'row',
    gap: GAP,
    marginBottom: GAP,
  },
  // Hàng 3: thấp hơn, không chừa khoảng cách phía dưới
  lastRow: {
    flex: 5,
    flexDirection: 'row',
  },
  // Nửa trái hàng 2: chứa ô 3 + ô 4, rộng đúng bằng ô 1
  half: {
    flex: 1,
    flexDirection: 'row',
    gap: GAP,
  },

  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  numberDark: {
    color: '#000',
  },

  // Phần trống bên dưới, chữ nằm sát đáy
  footerArea: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  footer: {
    fontSize: 18,
    color: '#333',
  },
});
