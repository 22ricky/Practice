import 'package:flutter/material.dart';
import 'animate.dart';

class Index extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Index',
          style: TextStyle(
            fontSize: 36.0,
          ),
        ),
        elevation: 0.0,
      ),
      backgroundColor: Colors.blue,
      body: Center(
        child: MaterialButton(
          child: Icon(
            Icons.navigate_next,
            color: Colors.white,
            size: 64.0,
          ),
          onPressed: () {
            Navigator.of(context).push(CustomRoute(Mail()));
          },
        ),
      ),
    );
  }
}

class Mail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Mail',
          style: TextStyle(
            fontSize: 36.0,
          ),
        ),
        backgroundColor: Colors.pinkAccent,
        leading: Container(),
        elevation: 0.0,
      ),
      backgroundColor: Colors.pinkAccent,
      body: Center(
        child: MaterialButton(
          child: Icon(
            Icons.navigate_before,
            color: Colors.white,
            size: 64.0,
          ),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
      ),
    );
  }
}