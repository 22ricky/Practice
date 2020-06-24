import 'package:flutter/material.dart';
import 'bottom.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'BottomNavigationBar',
      theme: ThemeData.light(),
      home: Bottom(),
    );
  }
}
