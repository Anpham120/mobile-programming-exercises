import 'package:flutter/material.dart';

// Khoảng cách giữa các ô và lề màn hình
const double gap = 10;

// Màu từng ô, lấy theo ảnh mẫu
const Color blue = Color(0xFF287FF0);
const Color red = Color(0xFFF83D3D);
const Color yellow = Color(0xFFFFD21C);
const Color green = Color(0xFF2DAF6A);
const Color purple = Color(0xFF7D3FE1);
const Color orange = Color(0xFFFF7512);

// Số trong ô: chữ đậm, màu trắng
const TextStyle number = TextStyle(
  fontSize: 36,
  fontWeight: FontWeight.bold,
  color: Colors.white,
);
// Số màu đen, dùng cho nền vàng
const TextStyle numberDark = TextStyle(
  fontSize: 36,
  fontWeight: FontWeight.bold,
  color: Colors.black,
);

// Dòng họ tên - MSSV ở cuối màn hình
const TextStyle footer = TextStyle(fontSize: 18, color: Color(0xFF333333));
