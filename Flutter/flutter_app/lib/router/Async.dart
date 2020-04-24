import 'package:flutter/material.dart';
void main() {
  runApp(MaterialApp(
    title: 'Asynchronous',
    home: Index(),
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
        child: RouteBotton(),
      ),
    );
  }
}

class RouteBotton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      child: Text('详情'),
      onPressed: () {
        _navigator(context);
      },
    );
  }

  _navigator(BuildContext context) async {
    final result = await Navigator.push(context, MaterialPageRoute(
      builder: (context) => Detail()
    ));

    Scaffold.of(context).showSnackBar(SnackBar(content: Text(result)));
  }
}

class Detail extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('详情'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              child: Text('详情1'),
              onPressed: () {
                Navigator.pop(context, '详情1：编号001');
              },
            ),
            RaisedButton(
              child: Text('详情2'),
              onPressed: () {
                Navigator.pop(context, '详情2：编号002');
              },
            ),
          ],
        ),
      ),
    );
  }
}