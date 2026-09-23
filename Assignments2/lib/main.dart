import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'styles.dart' as styles;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Nền trắng nên icon thanh trạng thái để màu tối
    return const AnnotatedRegion<SystemUiOverlayStyle>(
      value: SystemUiOverlayStyle(
        statusBarColor: Colors.white,
        statusBarIconBrightness: Brightness.dark, // Android
        statusBarBrightness: Brightness.light, // iOS
      ),
      child: Scaffold(
        backgroundColor: Colors.white,
        // SafeArea chừa chỗ cho thanh trạng thái và thanh điều hướng
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.fromLTRB(styles.gap, styles.gap, styles.gap, 0),
            child: Column(
              children: [
                // Khu vực lưới chiếm phần trên màn hình
                Expanded(
                  flex: 7,
                  child: Column(
                    spacing: styles.gap,
                    children: [
                      // Hàng 1 + hàng 2 (xếp dọc): cùng flex 6 với hàng 3 nên cả khối cao bằng hàng 3
                      Expanded(
                        flex: 6,
                        child: Column(
                          spacing: styles.gap,
                          children: [
                            Expanded(
                              child: Box(number: '1', color: styles.blue),
                            ),
                            Expanded(
                              child: Box(number: '2', color: styles.red),
                            ),
                          ],
                        ),
                      ),
                      // Hàng 3: ô 3, 4, 5 rộng bằng nhau, bên phải chừa khoảng trắng rộng bằng một ô
                      Expanded(
                        flex: 6,
                        child: Row(
                          spacing: styles.gap,
                          children: [
                            Expanded(
                              child: Box(
                                number: '3',
                                color: styles.yellow,
                                dark: true,
                              ),
                            ),
                            Expanded(
                              child: Box(number: '4', color: styles.green),
                            ),
                            Expanded(
                              child: Box(number: '5', color: styles.purple),
                            ),
                            Spacer(),
                          ],
                        ),
                      ),
                      // Hàng 4: ô 6 rộng hết hàng, thấp hơn hàng 3
                      Expanded(
                        flex: 5,
                        child: Box(number: '6', color: styles.orange),
                      ),
                    ],
                  ),
                ),
                // Phần trống bên dưới, chữ nằm sát đáy
                Expanded(
                  flex: 5,
                  child: Align(
                    alignment: Alignment.bottomCenter,
                    child: Padding(
                      padding: EdgeInsets.only(bottom: 40),
                      child: Text(
                        'Phạm Duy An - MSSV: BIT240002',
                        style: styles.footer,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// Một ô màu, số nằm giữa. dark = số màu đen (dùng cho nền vàng)
class Box extends StatelessWidget {
  const Box({
    super.key,
    required this.number,
    required this.color,
    this.dark = false,
  });

  final String number;
  final Color color;
  final bool dark;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: color,
      alignment: Alignment.center,
      child: Text(number, style: dark ? styles.numberDark : styles.number),
    );
  }
}
