/* Image Widget */
// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Image Widget'),
//         ),
//         body: Center(
//           child: Container(
//             child: Image.asset(
//               'images/boc.jpg',
//               fit: BoxFit.scaleDown,
//               color: Colors.yellowAccent,
//               colorBlendMode: BlendMode.overlay,
//               repeat: ImageRepeat.noRepeat,
//             ),
//             width: 400.0,
//             height: 300.0,
//             color: Colors.lightBlue,
//           ),
//         ),
//       ),
//     );
//   }
// }

import 'package:flutter/material.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Image Widget')
        ),
        body: Center(
          child: Container(
            child: Image.network(
              'https://main.qcloudimg.com/raw/9dc4aba20c6572a61e161da7c2588940.jpg',
              fit: BoxFit.scaleDown,
              color: Colors.yellowAccent,
              colorBlendMode: BlendMode.overlay,
              repeat: ImageRepeat.noRepeat,
            ),
            width: 400.0,
            height: 300.0,
            color: Colors.lightBlue,
          ),
        ),
      )
    );
  }
}