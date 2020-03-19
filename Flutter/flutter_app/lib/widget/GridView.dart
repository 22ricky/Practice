/* GridView Widget */
// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('GridView Widget'),
//         ),
//         body: GridView.count(
//           padding: EdgeInsets.all(20.0),
//           crossAxisSpacing: 10.0,
//           crossAxisCount: 3,
//           children: <Widget>[
//             Text('1'),
//             Text('2'),
//             Text('3'),
//             Text('4'),
//             Text('5'),
//             Text('6'),
//             Text('7'),
//             Text('8'),
//             Text('9'),
//           ],
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
      title: 'Welcome to Fultter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('GridView Widget'),
        ),
        body: GridView(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            mainAxisSpacing: 2.0,
            crossAxisSpacing: 2.0,
            crossAxisCount: 3,
            childAspectRatio: 0.7,
          ),
          children: <Widget>[
            Image.network(
              'http://img5.mtime.cn/mt/2018/10/22/104316.77318635_180X260X4.jpg',
              fit: BoxFit.cover
            ),
            Image.network(
              'http://img5.mtime.cn/mt/2018/10/10/112514.30587089_180X260X4.jpg',
              fit: BoxFit.cover
            ),
            Image.network(
              'http://img5.mtime.cn/mt/2018/11/13/093605.61422332_180X260X4.jpg',
              fit: BoxFit.cover
            ),
            Image.network(
              'http://img5.mtime.cn/mt/2018/11/07/092515.55805319_180X260X4.jpg',
              fit: BoxFit.cover
            ),
            Image.network(
              'http://img5.mtime.cn/mt/2018/11/21/090246.16772408_135X190X4.jpg',
              fit: BoxFit.cover
            ),
            Image.network(
              'http://img5.mtime.cn/mt/2018/11/17/162028.94879602_135X190X4.jpg',
              fit: BoxFit.cover
            ),
            Image.network(
              'http://img5.mtime.cn/mt/2018/11/19/165350.52237320_135X190X4.jpg',
              fit: BoxFit.cover
            ),
            Image.network(
              'http://img5.mtime.cn/mt/2018/11/16/115256.24365160_180X260X4.jpg',
              fit: BoxFit.cover
            ),
            Image.network(
              'http://img5.mtime.cn/mt/2018/11/20/141608.71613590_135X190X4.jpg',
              fit: BoxFit.cover
            ),
          ],
        ),
      ),
    );
  }
}