import 'package:flutter/material.dart';

class ExpandStateBean {
  var index;
  var expanded;
  ExpandStateBean(this.index, this.expanded);
}

class Index extends StatefulWidget {
  @override
  _IndexState createState() => _IndexState();
}

class _IndexState extends State<Index> {
  List<int> mList;
  List<ExpandStateBean> expandStateList;

  _IndexState() {
    mList = new List();
    expandStateList = new List();
    for (int i = 0; i < 15; i++) {
      mList.add(i);
      expandStateList.add(ExpandStateBean(i, false));
    }
  }

  _setCurrent(int index, expanded) {
    setState(() {
      expandStateList.forEach((item) {
        if (item.index == index) {
          item.expanded = !expanded;
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Expansion Panle List'),
      ),
      body: SingleChildScrollView(
        child: ExpansionPanelList(
          expansionCallback: (index, expanded) {
            _setCurrent(index, expanded);
          },
          children: mList.map((index) {
            return ExpansionPanel(
              headerBuilder: (context, expanded) {
                return ListTile(
                  title: Text('This is No.$index'),
                );
              },
              body: ListTile(
                title: Text('expansion no.$index'),
              ),
              isExpanded: expandStateList[index].expanded,
            );
          }).toList(),
        ),
      ),
    );
  }
}