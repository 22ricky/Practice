/* Text Widget */
// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Fultter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Text Widget'),
//         ),
//         body: Center(
//           child: Text(
//             'Hello World,this is a test flutter demo and welcome to here.',
//             textAlign: TextAlign.center,
//             maxLines: 1,
//             overflow: TextOverflow.ellipsis,
//             style: TextStyle(
//               fontSize: 25.0,
//               color: Color.fromARGB(255, 14, 144, 255),
//               decoration: TextDecoration.underline,
//               decorationStyle: TextDecorationStyle.dashed,
//             ),
//           ),
//         )
//       ),
//     );
//   }
// }

/* Container Widget */
// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Container Widget'),
//         ),
//         body: Center(
//           child: Container(
//             child: Text(
//               'Hello Flutter',
//               style: TextStyle(
//                 fontSize: 40.0
//               ),
//             ),
//             alignment: Alignment.topLeft,
//             width: 500.0,
//             height: 400.0,
//             margin: const EdgeInsets.all(10.0),
//             padding: const EdgeInsets.fromLTRB(10.0, 10.0, 0.0, 0.0),
//             decoration: BoxDecoration(
//               color: Colors.lightBlue,
//               gradient: const LinearGradient(
//                 colors: [Colors.lightBlue, Colors.greenAccent, Colors.purple]
//               ),
//               border: Border.all(
//                 width: 5.0,
//                 color: Colors.red
//               )
//             ),
//           ),
//         ),
//       ),
//     );
//   }
// }

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
//           title: Text('Image Widget')
//         ),
//         body: Center(
//           child: Container(
//             child: Image.network(
//               'https://main.qcloudimg.com/raw/9dc4aba20c6572a61e161da7c2588940.jpg',
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
//       )
//     );
//   }
// }

/* ListView Widget */
// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Fultter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('ListView Widget'),
//         ),
//         body: ListView(
//           children: <Widget>[
//             ListTile(
//               leading: Icon(Icons.ac_unit),
//               title: Text('ac_unit'),
//             ),
//             ListTile(
//               leading: Icon(Icons.access_alarm),
//               title: Text('access_alarm'),
//             ),
//             ListTile(
//               leading: Icon(Icons.access_alarms),
//               title: Text('access_alarms'),
//             ),
//             ListTile(
//               leading: Icon(Icons.access_time),
//               title: Text('access_time'),
//             ),
//             Image.network('http://newimg.jspang.com/TaroLogo.jpg'),
//             Image.network('http://newimg.jspang.com//next_blog.jpg'),
//             Image.network('http://newimg.jspang.com/ReactHooks01.png'),
//             Image.network('http://newimg.jspang.com/Redux_index.png'),
//           ],
//         ),
//       ),
//     );
//   }
// }

// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('ListView Widget')
//         ),
//         body: Center(
//           child: Container(
//             height: 200.0,
//             child: MyList(),
//           ),
//         ),
//       ),
//     );
//   }
// }

// class MyList extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return ListView(
//       scrollDirection: Axis.horizontal,
//       children: <Widget>[
//         Container(
//           width: 200.0,
//           color: Colors.lightBlue,
//         ),
//         Container(
//           width: 200.0,
//           color: Colors.amber,
//         ),
//         Container(
//           width: 200.0,
//           color: Colors.deepOrange,
//         ),
//         Container(
//           width: 200.0,
//           color: Colors.deepPurple,
//         ),
//       ],
//     );
//   }
// }

// import 'package:flutter/material.dart';
// void main() => runApp(MyApp(
//   items: List<String>.generate(1000, (i) => 'Item $i')
// ));

// class MyApp extends StatelessWidget {
//   final List<String> items;
//   MyApp({Key key, @required this.items}):super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Fultter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('ListView Widget'),
//         ),
//         body: ListView.builder(
//           itemCount: items.length,
//           itemBuilder: (context, index) {
//             return ListTile(
//               title: Text(items[index]),
//             );
//           },
//         ),
//       ),
//     );
//   }
// }

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