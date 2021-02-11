import 'package:flutter/material.dart';
import 'index.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Wrap',
      theme: ThemeData.dark(),
      home: Index(),
    );
  }
}