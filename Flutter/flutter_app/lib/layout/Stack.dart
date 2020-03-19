/* Stack Widget */
import 'package:flutter/material.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Stack Widget'),
        ),
        body: Center(
          child: Stack(
            // alignment: FractionalOffset(0.5, 0.75),
            children: <Widget>[
              CircleAvatar(
                backgroundImage: NetworkImage('https://upload.wikimedia.org/wikipedia/zh/thumb/d/db/AC_Milan.svg/225px-AC_Milan.svg.png'),
                radius: 100.0,
              ),
              Positioned(
                top: 15.0,
                left: 60.0,
                child: Container(
                  decoration: BoxDecoration(
                    color: Colors.red,
                  ),
                  padding: EdgeInsets.all(5.0),
                  child: Text('AC MILAN'),
                ),
              ),
              Positioned(
                bottom: 15.0,
                right: 60.0,
                child: Container(
                  decoration: BoxDecoration(
                    color: Colors.red,
                  ),
                  padding: EdgeInsets.all(5.0),
                  child: Text('AC MILAN'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}