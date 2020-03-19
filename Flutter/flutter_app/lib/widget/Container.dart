/* Container Widget */
import 'package:flutter/material.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Container Widget'),
        ),
        body: Center(
          child: Container(
            child: Text(
              'Hello Flutter',
              style: TextStyle(
                fontSize: 40.0
              ),
            ),
            alignment: Alignment.topLeft,
            width: 500.0,
            height: 400.0,
            margin: const EdgeInsets.all(10.0),
            padding: const EdgeInsets.fromLTRB(10.0, 10.0, 0.0, 0.0),
            decoration: BoxDecoration(
              color: Colors.lightBlue,
              gradient: const LinearGradient(
                colors: [Colors.lightBlue, Colors.greenAccent, Colors.purple]
              ),
              border: Border.all(
                width: 5.0,
                color: Colors.red
              )
            ),
          ),
        ),
      ),
    );
  }
}