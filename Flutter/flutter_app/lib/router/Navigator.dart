import 'package:flutter/material.dart';
void main() {
  runApp(MaterialApp(
    title: 'Navigator',
    home: Index()
  ));
}

class Index extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('首页'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('详情'),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(
              builder: (context) => Detail()
            ));
          },
        ),
      ),
    );
  }
}

class Detail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('详情')
      ),
      body: Center(
        child: RaisedButton(
          child: Text('首页'),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
    );
  }
}