import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:assignments2/main.dart';
import 'package:assignments2/styles.dart' as styles;

void main() {
  testWidgets('Bố cục 6 ô giống ảnh mẫu', (WidgetTester tester) async {
    // Màn hình cỡ điện thoại
    tester.view.physicalSize = const Size(1080, 2400);
    tester.view.devicePixelRatio = 2.75;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(const MyApp());

    Rect box(String number) => tester.getRect(find.widgetWithText(Box, number));
    final b1 = box('1'),
        b2 = box('2'),
        b3 = box('3'),
        b4 = box('4'),
        b5 = box('5'),
        b6 = box('6');

    // Ô 1, 2, 6 rộng hết hàng
    expect(b2.width, b1.width);
    expect(b6.width, b1.width);

    // Hàng 3: ba ô rộng bằng nhau, mỗi ô chiếm 1/4 hàng, bên phải để trống
    expect(b4.width, b3.width);
    expect(b5.width, b3.width);
    expect(b3.width, closeTo((b1.width - 3 * styles.gap) / 4, 0.01));

    // Khối hàng 1 + 2 cao bằng hàng 3, hàng 4 cao bằng 5/6 hàng 3
    expect(b2.bottom - b1.top, closeTo(b3.height, 0.01));
    expect(b6.height, closeTo(b3.height * 5 / 6, 0.01));

    expect(find.text('Phạm Duy An - MSSV: BIT240002'), findsOneWidget);
  });
}
