/* Column Widget */
import 'package:flutter/material.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Column Widget'),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text('aaa'),
            Expanded(
              child: Center(
                child: Text('biubiubiu'),
              ),
            ),
            Text('ccc'),
          ],
        ),
      ),
    );
  }
}