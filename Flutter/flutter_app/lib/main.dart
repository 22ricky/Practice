import 'package:flutter/material.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext content) {
    return MaterialApp(
      title: 'Welcome to Fultter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter')
        ),
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}