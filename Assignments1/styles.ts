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
    gap: GAP,
  },
  // Khoảng trắng bên phải ô 6, rộng bằng ô 2 nên ô 6 rộng bằng ô 1
  spacer: {
    flex: 1,
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
