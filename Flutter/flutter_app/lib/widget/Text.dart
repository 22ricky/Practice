/* Text Widget */
import 'package:flutter/material.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Fultter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Text Widget'),
        ),
        body: Center(
          child: Text(
            'Hello World,this is a test flutter demo and welcome to here.',
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 25.0,
              color: Color.fromARGB(255, 14, 144, 255),
              decoration: TextDecoration.underline,
              decorationStyle: TextDecorationStyle.dashed,
            ),
          ),
        )
      ),
    );
  }
}