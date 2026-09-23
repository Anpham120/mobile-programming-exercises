import { StatusBar, StyleSheet } from 'react-native';

const GAP = 10;

export const styles = StyleSheet.create({
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
  // Khối hàng 1 + hàng 2 (xếp dọc): cùng flex 6 với hàng 3 nên cả khối cao bằng hàng 3
  stack: {
    flex: 6,
    gap: GAP,
    marginBottom: GAP,
  },
  // Hàng 3: ô 3, 4, 5
  row: {
    flex: 6,
    flexDirection: 'row',
    gap: GAP,
    marginBottom: GAP,
  },
  // Hàng 4: thấp hơn, không chừa khoảng cách phía dưới
  lastRow: {
    flex: 5,
    flexDirection: 'row',
    gap: GAP,
  },
  // Khoảng trắng bên phải ô 5 và ô 6, chia đều chỗ với ô bên trái nó
  spacer: {
    flex: 1,
  },
  // Nửa hàng 3 (trái: ô 3 + ô 4, phải: ô 5 + khoảng trắng), rộng đúng bằng ô 6
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
