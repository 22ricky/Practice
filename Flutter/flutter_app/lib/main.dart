// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp([]
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Home'),
//         ),
//         body: Center(
//           child: Text('Hello Flutter'),
//         ),
//       ),
//     );
//   }
// }

import 'package:flutter/material.dart';
import './demo/demo14/index.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tooltip',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Index(),
    );
  }
}