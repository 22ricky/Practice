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
          child: Container(
            child: Text(
              'Hello Fultter',
              style: TextStyle(
                fontSize: 40.0,
              ),
            ),
            alignment: Alignment.topLeft,
            width: 500.0,
            height: 400.0,
            // color: Colors.lightBlue,
            margin: const EdgeInsets.all(10.0),
            padding: const EdgeInsets.fromLTRB(10.0, 10.0, 0.0, 0.0),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [Colors.lightBlue, Colors.greenAccent, Colors.purple]
              ),
              border: Border.all(
                width: 5.0,
                color: Colors.red
              )
            ),
          ),
          // child: Text(
          //   'Hello World,this is a test flutter demo and welcome to here.',
          //   textAlign: TextAlign.center,
          //   maxLines: 1,
          //   overflow: TextOverflow.ellipsis,
          //   style: TextStyle(
          //     fontSize: 25.0,
          //     color: Color.fromARGB(255, 24, 144, 255),
          //     decoration: TextDecoration.underline,
          //     decorationStyle: TextDecorationStyle.dashed,
          //   ),
          // ),
        ),
      ),
    );
  }
}